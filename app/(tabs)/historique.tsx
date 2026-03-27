import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const releves = [
  { id: 'IDX-99284-B', index: '14,293.00', date: '12 Oct 2023 • 14:22', synced: true },
  { id: 'IDX-11045-A', index: '08,412.50', date: '12 Oct 2023 • 15:05', synced: false },
  { id: 'IDX-88301-C', index: '42,001.12', date: '11 Oct 2023 • 09:15', synced: true },
  { id: 'IDX-00219-F', index: '102,445.0', date: '11 Oct 2023 • 08:40', synced: true },
];

export default function HistoriqueScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Historique des Relevés</Text>

      {/* État sync */}
      <View style={styles.syncCard}>
        <Text style={styles.syncTitle}>3 en attente de synchronisation</Text>
        <Text style={styles.syncSub}>Dernière sync : Aujourd&apos;hui 08:45</Text>
        <TouchableOpacity style={styles.syncBtn}>
          <Ionicons name="sync-outline" size={16} color="#fff" />
          <Text style={styles.syncBtnText}>Synchroniser tout</Text>
        </TouchableOpacity>
      </View>

      {/* Liste */}
      <Text style={styles.sectionTitle}>Derniers relevés</Text>
      {releves.map((r) => (
        <View key={r.id} style={styles.card}>
          <View style={styles.row}>
            <View>
              <Text style={styles.label}>N° COMPTEUR</Text>
              <Text style={styles.compteurId}>{r.id}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.label}>INDEX</Text>
              <Text style={styles.indexVal}>{r.index}</Text>
            </View>
          </View>
          <View style={[styles.row, { marginTop: 8 }]}>
            <Text style={styles.date}>{r.date}</Text>
            {r.synced ? (
              <View style={styles.syncedBadge}>
                <Ionicons name="cloud-upload-outline" size={13} color="#1A56CC" />
                <Text style={styles.syncedText}>Synchronisé</Text>
              </View>
            ) : (
              <View style={styles.pendingBadge}>
                <Ionicons name="cloud-offline-outline" size={13} color="#DC2626" />
                <Text style={styles.pendingText}>En attente</Text>
              </View>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginTop: 48, marginBottom: 16 },
  syncCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 16, gap: 6 },
  syncTitle: { fontSize: 16, fontWeight: '700' },
  syncSub: { fontSize: 13, color: 'gray' },
  syncBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
    backgroundColor: '#1A56CC', borderRadius: 10,
    paddingVertical: 12, paddingHorizontal: 16, marginTop: 6, justifyContent: 'center',
  },
  syncBtnText: { color: '#fff', fontWeight: '700' },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: 'gray', marginBottom: 10, letterSpacing: 0.5 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 14, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  label: { fontSize: 10, color: 'gray', fontWeight: '700', letterSpacing: 0.5, marginBottom: 2 },
  compteurId: { fontSize: 15, fontWeight: '800' },
  indexVal: { fontSize: 18, fontWeight: '800', color: '#1A56CC' },
  date: { fontSize: 13, color: '#374151' },
  syncedBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    backgroundColor: '#EBF2FF', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4,
  },
  syncedText: { fontSize: 11, fontWeight: '700', color: '#1A56CC' },
  pendingBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    backgroundColor: '#FEE2E2', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4,
  },
  pendingText: { fontSize: 11, fontWeight: '700', color: '#DC2626' },
});