import { useCallback } from 'react';

const LintTest = ({ isTestBool }: { isTestBool: boolean }) => {
  const click = useCallback(() => {
    console.log('Hello!');
  }, []);

  return (
    <button type="button" onClick={click}>
      {isTestBool ? <p>hello</p> : null}
    </button>
  );
};

export default LintTest;
