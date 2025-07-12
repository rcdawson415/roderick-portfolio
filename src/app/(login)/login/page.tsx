'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from '../../../../config/ddbDocClient'
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo.svg';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Placeholder for actual authentication logic
  const getUser = async () => {
    const command = new GetCommand({
      TableName: "User",
      Key: {
        userId:'abc',
        username:'user'
      },
    });
    const response = await ddbDocClient.send(command);
    return response;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await getUser();
      // On success, redirect to home or dashboard
      router.push('/');
    } catch (err) {
      setError('Invalid email or password.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-900 dark:to-primary-950 flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white/90 backdrop-blur-sm border-b border-neutral-200 dark:bg-neutral-800/90 dark:border-neutral-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Paradise Solutions Logo" width={48} height={48} className="dark:invert" priority />
            <span className="text-2xl font-bold text-neutral-900 dark:text-white font-display">Paradise Solutions</span>
          </div>
          <nav>
            <Link href="/" className="text-neutral-700 hover:text-primary-600 dark:text-neutral-200 dark:hover:text-primary-400 font-medium px-4 py-2 rounded transition-colors">
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Login Form */}
      <section className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <Image src={logo} alt="Paradise Solutions Logo" width={64} height={64} className="dark:invert mb-2" priority />
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">Sign in to your account</h2>
            <p className="text-neutral-500 dark:text-neutral-300 text-sm">Welcome back! Please enter your credentials.</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="••••••••"
                disabled={loading}
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}
            <div className="flex flex-col gap-3 pt-2">
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
              <button
                type="button"
                className="w-full border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950 font-semibold py-2 rounded-lg transition-colors"
                onClick={() => router.push('/signup')}
                disabled={loading}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}