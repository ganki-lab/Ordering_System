import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

export const initializeSupabase = () => {
  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase環境変数が設定されていません。ローカルモードで動作します。');
    return null;
  }

  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('Supabase接続が初期化されました');
    return supabase;
  } catch (error) {
    console.error('Supabase初期化エラー:', error);
    return null;
  }
};

export const getSupabase = () => {
  if (!supabase) {
    return initializeSupabase();
  }
  return supabase;
};

export const isSupabaseConfigured = () => {
  return !!(process.env.EXPO_PUBLIC_SUPABASE_URL && process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY);
};