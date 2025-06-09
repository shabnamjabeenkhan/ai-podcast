'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useUser } from '@clerk/nextjs';
import { loadStripe } from '@stripe/stripe-js';
import config from '@/config';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function PaymentButtons() {
  if (!config?.auth?.enabled) return null;

  const [loadingType, setLoadingType] = useState<null | 'subscription' | 'onetime'>(null);
  const { toast } = useToast();
  const { user } = useUser();

  // Helper to handle both payment types
  const handlePayment = async (priceId: string, isSubscription: boolean) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "You need to be logged in to make payments",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoadingType(isSubscription ? 'subscription' : 'onetime');

      const response = await fetch('/api/payments/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          priceId,
          subscription: isSubscription,
        }),
      });

      const { sessionId, error } = await response.json();
      if (error) throw new Error(error);

      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) throw error;
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to initiate payment flow. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoadingType(null);
    }
  };

  return (
    <div className="flex gap-4">
      <Button variant="outline" className="border-cyan-400 text-cyan-400 font-bold text-lg py-6 rounded-lg hover:bg-cyan-950/30 transition-colors"
        onClick={() => {
          setLoadingType('subscription');
          handlePayment(process.env.NEXT_PUBLIC_STRIPE_PRODUCT_1_PRICE_ID as string, true)
            .finally(() => setLoadingType(null));
        }}
        disabled={loadingType !== null}
      >
        {loadingType === 'subscription' ? 'Processing...' : 'Subscribe for £5.99/month'}
      </Button>
      <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold text-lg py-6 rounded-lg shadow-md transition-colors"
        onClick={() => {
          setLoadingType('onetime');
          handlePayment(process.env.NEXT_PUBLIC_STRIPE_ONETIME_PRICE_ID as string, false)
            .finally(() => setLoadingType(null));
        }}
        disabled={loadingType !== null}
      >
        {loadingType === 'onetime' ? 'Processing...' : 'Buy for £29.99 one-time'}
      </Button>
    </div>
  );
}