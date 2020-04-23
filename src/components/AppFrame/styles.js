const styles = theme => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  topBar: {
    minHeight: 56,
    width: '100vw',
  },
  leftPanel: {
    minWidth: 234,
  },
  rightPanel: {
    minWidth: 234,
  }
});

export default styles;
