import './AppContent.css';

const AppContent = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    // Add any side effects here if needed
  }, []);

  return (
    <div className="AppContent">
      <div className="AppContent_Field"></div>
      <div className="AppContent_Field"></div>
      <div className="AppContent_Field"></div>
    </div>
  );
};

export default AppContent;