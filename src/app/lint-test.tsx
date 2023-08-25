import { useCallback } from 'react';

const LintTest = ({ isTestBool }: { isTestBool: boolean }) => {
  const click = useCallback(() => {
    console.log('Hello!');
  }, []);

  return (
    <button onClick={click} type="button">
      {isTestBool ? <p>hello</p> : null}
    </button>
  );
};

export default LintTest;
