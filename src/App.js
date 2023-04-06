import './App.css';
import { PrivacyPolicyProvider, PrivacyPolicyContext } from './contexts/PrivacyPolicyContext';
import Portfolio from './pages/Portfolio';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <PrivacyPolicyProvider>
      <PrivacyPolicyContext.Consumer>
        {({ showPrivacyPolicy, handlePrivacyPolicyClose }) => (
          <>
            <Portfolio />
            {showPrivacyPolicy && <PrivacyPolicy showModal={showPrivacyPolicy} handleClose={handlePrivacyPolicyClose} />}
          </>
        )}
      </PrivacyPolicyContext.Consumer>
    </PrivacyPolicyProvider>
  );
}

export default App;
