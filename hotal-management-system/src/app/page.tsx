'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import EnergyAdminPortal from './pages/EnergyAdminPortal';
import { supabase } from '../supabaseClient';

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace('/login');
      }
    };
    checkSession();
  }, [router]);

  return <EnergyAdminPortal />;
}
