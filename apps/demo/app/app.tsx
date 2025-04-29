import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { CONFIG } from '@bitovi-distribute-task-execution-example/config';

const getPageLoad = (index: number) => {
  let pageLoadTime: number | null = null;

  if (Array.isArray(CONFIG.pageLoadTime)) {
    pageLoadTime = CONFIG.pageLoadTime[index % CONFIG.pageLoadTime.length];
  } else {
    pageLoadTime = CONFIG.pageLoadTime;
  }

  if (typeof pageLoadTime !== 'number') {
    throw new Error('Unexpected missing pageLoadTime from config.json');
  }

  return pageLoadTime;
}

const getCount = (value: unknown): number => {
  if (!value) {
    return 0;
  }

  const parsedValue = +value;

  if (isNaN(parsedValue)) {
    return 0;
  }

  return parsedValue;
};

export default function AppComponent() {
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const count = getCount(params.count);

  // Simulate a loading state
  useEffect(() => {
    setLoaded(false);

    const timeoutRef = setTimeout(() => {
      setLoaded(true);
    }, getPageLoad(count));

    return () => clearTimeout(timeoutRef);
  }, [count]);

  return (
    <>
      <div className="overlay">{loaded ? count : '?'}</div>
      <div className="container">
        {loaded ? (
          <h1 className="header">The current number is {count}</h1>
        ) : (
          <h1>Loading number...</h1>
        )}
        <div className="loader-section">
          {!loaded ? <div className="loader" /> : null}
        </div>
        <div className="buttons">
          <Link role="button" to={`/${count - 1}`}>
            Prev Number
          </Link>
          <Link role="button" to={`/${count + 1}`}>
            Next Number
          </Link>
        </div>
      </div>
    </>
  );
}
