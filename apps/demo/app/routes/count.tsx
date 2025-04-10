import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

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

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      setLoaded(true);
    }, 5_000);

    return () => clearTimeout(timeoutRef);
  }, []);

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
