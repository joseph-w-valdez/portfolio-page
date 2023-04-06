import React, { createContext, useState } from 'react';

export const PrivacyPolicyContext = createContext({
  showPrivacyPolicy: false,
  handlePrivacyPolicyClick: () => {},
  handlePrivacyPolicyClose: () => {},
});

export const PrivacyPolicyProvider = ({ children }) => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handlePrivacyPolicyClick = () => {
    setShowPrivacyPolicy(true);
  };

  const handlePrivacyPolicyClose = () => {
    setShowPrivacyPolicy(false);
  };

  return (
    <PrivacyPolicyContext.Provider value={{ showPrivacyPolicy, handlePrivacyPolicyClick, handlePrivacyPolicyClose }}>
      {children}
    </PrivacyPolicyContext.Provider>
  );
};
