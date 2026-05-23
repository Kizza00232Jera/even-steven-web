import { headers } from 'next/headers';
import InviteRedirect from './InviteRedirect';

const APP_STORE_URL = 'https://apps.apple.com/app/even-steven/id0000000000';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.evensteven.app';

function detectPlatform(ua: string): 'ios' | 'android' | 'other' {
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'other';
}

export default async function InvitePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const headersList = await headers();
  const ua = headersList.get('user-agent') ?? '';
  const platform = detectPlatform(ua);

  const deepLink = `evensteven://invite/${token}`;
  const storeUrl =
    platform === 'ios' ? APP_STORE_URL :
    platform === 'android' ? PLAY_STORE_URL :
    null;

  return <InviteRedirect token={token} deepLink={deepLink} storeUrl={storeUrl} />;
}