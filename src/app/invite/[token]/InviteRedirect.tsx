'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './invite.module.css';

interface Props {
  token: string;
  deepLink: string;
  storeUrl: string | null;
}

export default function InviteRedirect({ deepLink, storeUrl }: Props) {
  const [status, setStatus] = useState<'trying' | 'notInstalled' | 'desktop'>('trying');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!storeUrl) {
      setStatus('desktop');
      return;
    }

    // Try opening the app via custom URL scheme
    window.location.href = deepLink;

    // If the app isn't installed, the page stays visible — redirect to store
    timerRef.current = setTimeout(() => {
      setStatus('notInstalled');
      window.location.href = storeUrl;
    }, 2500);

    // If the app opens, the page goes to background — clear timer on visibility change
    const handleVisibilityChange = () => {
      if (document.hidden && timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [deepLink, storeUrl]);

  if (status === 'desktop') {
    return (
      <main className={styles.container}>
        <div className={styles.card}>
          <div className={styles.logo}>ES</div>
          <h1 className={styles.title}>Even Steven</h1>
          <p className={styles.body}>
            Open this link on your iOS or Android device to join the group.
          </p>
        </div>
      </main>
    );
  }

  if (status === 'notInstalled') {
    return (
      <main className={styles.container}>
        <div className={styles.card}>
          <div className={styles.logo}>ES</div>
          <h1 className={styles.title}>Get Even Steven</h1>
          <p className={styles.body}>Redirecting you to the App Store…</p>
          {storeUrl && (
            <a href={storeUrl} className={styles.button}>
              Download on the App Store
            </a>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>ES</div>
        <h1 className={styles.title}>Opening Even Steven…</h1>
        <p className={styles.body}>
          If the app doesn&apos;t open, you&apos;ll be redirected to the App Store.
        </p>
      </div>
    </main>
  );
}
