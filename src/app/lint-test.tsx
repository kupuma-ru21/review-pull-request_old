import { useCallback } from 'react';

const LintTest = ({ isTestBool }: { isTestBool: boolean }) => {
  const click = useCallback(() => {
    console.log('Hello!');
  }, []);

  return (
    <>
      {[1].map((value) => (
        // can not use index from an array as key
        <div key={value} />
      ))}
      <button onClick={click} type="button">
        {isTestBool ? <p>hello</p> : null}
      </button>
    </>
  );
};

export default LintTest;
