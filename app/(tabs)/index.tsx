import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MissionsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Missions du jour</Text>

      {/* Progression */}
      <View style={styles.card}>
        <Text style={styles.label}>PROGRESSION</Text>
        <Text style={styles.bigNum}>84%</Text>
        <View style={styles.barBg}>
          <View style={[styles.barFill, { width: '84%' }]} />
        </View>
        <Text style={styles.sub}>126 / 150 points validés</Text>
      </View>

      {/* Stats */}
      <View style={styles.row}>
        <View style={[styles.statCard, { backgroundColor: '#EBF2FF' }]}>
          <Ionicons name="checkbox-outline" size={24} color="#1A56CC" />
          <Text style={styles.statNum}>126</Text>
          <Text style={styles.statLbl}>Effectués</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: '#FEE2E2' }]}>
          <Ionicons name="warning-outline" size={24} color="#DC2626" />
          <Text style={styles.statNum}>04</Text>
          <Text style={styles.statLbl}>Anomalies</Text>
        </View>
      </View>

      {/* Tournées */}
      <Text style={styles.sectionTitle}>Tournées en cours</Text>

      <TouchableOpacity style={styles.tourneeCard}>
        <Ionicons name="business-outline" size={28} color="#1A56CC" />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.tourneeName}>Zone Sud - Secteur Pétrochimique</Text>
          <Text style={styles.tourneeLoc}>📍 Bâtiment B-12</Text>
        </View>
        <Text style={styles.tourneeCount}>12/15</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tourneeCard}>
        <Ionicons name="flash-outline" size={28} color="gray" />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.tourneeName}>Poste HT - Maintenance</Text>
          <Text style={styles.tourneeLoc}>📍 Station Nord</Text>
        </View>
        <Text style={[styles.tourneeCount, { color: 'gray' }]}>0/8</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginTop: 48, marginBottom: 16 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12 },
  label: { fontSize: 11, color: 'gray', fontWeight: '700', letterSpacing: 1 },
  bigNum: { fontSize: 40, fontWeight: 'bold', marginVertical: 4 },
  barBg: { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4, marginVertical: 8 },
  barFill: { height: 8, backgroundColor: '#1A56CC', borderRadius: 4 },
  sub: { fontSize: 13, color: 'gray' },
  row: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  statCard: { flex: 1, borderRadius: 12, padding: 14, alignItems: 'flex-start', gap: 4 },
  statNum: { fontSize: 28, fontWeight: 'bold' },
  statLbl: { fontSize: 12, fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  tourneeCard: {
    backgroundColor: '#fff', borderRadius: 12, padding: 14,
    flexDirection: 'row', alignItems: 'center', marginBottom: 10,
  },
  tourneeName: { fontSize: 14, fontWeight: '600' },
  tourneeLoc: { fontSize: 12, color: 'gray', marginTop: 3 },
  tourneeCount: { fontSize: 16, fontWeight: 'bold', color: '#1A56CC' },
});