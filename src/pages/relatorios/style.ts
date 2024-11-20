import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  scrollViewContainer: {
    paddingBottom: 16,
    paddingHorizontal: 8,
  },
  reportCard: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    maxHeight: 300, // Para garantir que o card tenha altura limitada quando expandido
    overflow: 'hidden',
    position: 'relative',
  },
  reportCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reportCardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  reportCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  expandButton: {
    marginTop: 10,
    textAlign: 'center',
  },
  expandButtonText: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
