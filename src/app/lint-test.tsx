import { useCallback } from 'react';

const LintTest = ({ isTestBool }: { isTestBool: boolean }) => {
  const click = useCallback(() => {
    console.log('Hello!');
  }, []);

  return (
    <button type="button" onClick={click}>
      {isTestBool && <p>hello</p>}
    </button>
  );
};

export default LintTest;
