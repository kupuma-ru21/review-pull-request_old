const LintTest = ({ isTestBool }: { isTestBool: boolean }) => (
  <div>{isTestBool && <p>hello</p>}</div>
);

export default LintTest;
