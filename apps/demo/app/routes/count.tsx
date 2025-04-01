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
  const params = useParams();
  const count = getCount(params.count);

  return (
    <div>
      <h1>The current number is {count}</h1>
      <Link role="button" to={`/count/${count - 1}`}>
        Previous Number
      </Link>
      <Link role="button" to={`/count/${count + 1}`}>
        Next Number
      </Link>
    </div>
  );
}
