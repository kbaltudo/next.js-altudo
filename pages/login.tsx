import React from 'react';
import { useAtom } from 'jotai';
import { isUserLoggedIn } from '../data/atom/authorization-atom';
import { useRouter } from 'next/router';
import Header from '../components/PageStructure/Header/Header';
import Layout from '../components/PageStructure/Container/Layout';
import Head from 'next/head';
import { homeRouter } from '../lib/provider/mapper';
import { useState } from 'react';
import users from '../data/atom/users';
import { setCookie } from 'cookies-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function LoginPage({ pageTemplate, pageResponse, provider, meta }: any) {

  const router = useRouter();
  const [loggedIn, setLoggedIn] = useAtom(isUserLoggedIn);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      // Successful login, redirect or perform other actions
      setLoggedIn(true);
      setCookie('logged', 'true');
      setCookie('role', user.role);
      console.log('Login successful');
      router.push('/');
    } else {
      setError('Invalid email or password');
    }
  }

  return (
    <Layout header={pageTemplate} provider={provider}>
      <Head>
        <title>
          {provider == "drupal" ? "Login" : "Login"}
        </title>
      </Head>
      <>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className='row w-75 m-auto mt-5 mb-5 border shadow rounded'>
              <div className='col-md-6 bg-warning rounded-start'>

              </div>
              <div className='col-md-6 p-5'>
                <div className='text-center'><FontAwesomeIcon icon={faLock} /></div>
                <h2 className='text-center'>Sign In</h2>

                <div className="mb-3 mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-check mb-3">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="remember"
                    />
                    Remember me
                  </label>
                </div>
                <div className='text-center'>
                  <button type="submit" className="btn btn-primary ps-5 pe-5">
                    Sign In
                  </button>
                </div>
                {error && <p>{error}</p>}
              </div>
            </div>

          </form>
        </div>
      </>
    </Layout >
  );
};

export default LoginPage;
export async function getServerSideProps() {
  const pageResponse = (await homeRouter()) ?? [];
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate,
      pageResponse: pageResponse.data,
      provider: pageResponse.provider,
    },
  };
}