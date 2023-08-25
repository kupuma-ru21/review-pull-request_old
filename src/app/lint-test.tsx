import { useCallback } from 'react';

const initialItems: [] = [];
// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md

const LintTest = ({
  isTestBool,
  items = initialItems,
}: {
  isTestBool: boolean;
  items: [];
}) => {
  const click = useCallback(() => {
    console.log(items);
  }, [items]);

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
