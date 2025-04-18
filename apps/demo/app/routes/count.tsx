import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router';
import { CONFIG } from '@bitovi-distribute-task-execution-example/config';

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

export default function AboutComponent() {
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const count = getCount(params.count);
  const countRef = useRef<null | number>(null);

  useEffect(() => {
    if (countRef.current !== count) {
      setLoaded(false);
      countRef.current = count;
    }

    if (loaded) {
      return;
    }

    const timeoutRef = setTimeout(() => {
      setLoaded(true);
    }, CONFIG.pageLoadTime);

    return () => clearTimeout(timeoutRef);
  }, [loaded, count]);

  return (
    <div>
      {loaded ? <h1 className="header">The current number is {count}</h1> : <h1 className="loader">Loading...</h1>}
      <Link role="button" to={`/count/${count - 1}`}>
        Previous Number
      </Link>
      <Link role="button" to={`/count/${count + 1}`}>
        Next Number
      </Link>
    </div>
  );
}
