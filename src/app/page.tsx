import { css } from '@/styled-system/css';
import LintTest from './lint-test';

const Home = () => (
  <>
    <h1 className={css({ fontSize: '16px', fontWeight: 'bold' })}>Home</h1>
    <LintTest isTestBool items={[]} />
  </>
);

export default Home;
