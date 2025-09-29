import { useEffect, useState } from 'react';
import { getSupabase, initializeSupabase } from '@/lib/supabase';

export const useSupabase = () => {
  const [supabase, setSupabase] = useState(getSupabase());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const client = initializeSupabase();
    setSupabase(client);
    setIsLoading(false);
  }, []);

  return { supabase, isLoading };
};