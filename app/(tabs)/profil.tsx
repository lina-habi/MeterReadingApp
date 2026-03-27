import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfilScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Profil</Text>

      {/* Avatar */}
      <View style={styles.avatarCard}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color="#1A56CC" />
        </View>
        <Text style={styles.name}>Agent #429</Text>
        <Text style={styles.role}>Technicien de Relevés</Text>
        <View style={styles.statusRow}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>En service</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        {[
          { val: '126', lbl: 'Relevés' },
          { val: '97%', lbl: 'Réussite' },
          { val: '04',  lbl: 'Anomalies' },
        ].map((s) => (
          <View key={s.lbl} style={styles.statBox}>
            <Text style={styles.statVal}>{s.val}</Text>
            <Text style={styles.statLbl}>{s.lbl}</Text>
          </View>
        ))}
      </View>

      {/* Menu */}
      {[
        { icon: 'settings-outline',           label: 'Paramètres' },
        { icon: 'wifi-outline',               label: 'Synchronisation' },
        { icon: 'shield-checkmark-outline',   label: 'Sécurité' },
        { icon: 'help-circle-outline',        label: 'Aide & Support' },
      ].map((m) => (
        <TouchableOpacity key={m.label} style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Ionicons name={m.icon as any} size={20} color="#1A56CC" />
          </View>
          <Text style={styles.menuLabel}>{m.label}</Text>
          <Ionicons name="chevron-forward" size={16} color="gray" />
        </TouchableOpacity>
      ))}

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Ionicons name="log-out-outline" size={18} color="#DC2626" />
        <Text style={styles.logoutText}>Se déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginTop: 48, marginBottom: 16 },
  avatarCard: {
    backgroundColor: '#fff', borderRadius: 12, padding: 20,
    alignItems: 'center', marginBottom: 12, gap: 6,
  },
  avatar: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#EBF2FF', alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: '#1A56CC',
  },
  name: { fontSize: 20, fontWeight: 'bold' },
  role: { fontSize: 13, color: 'gray' },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#16A34A' },
  statusText: { fontSize: 13, fontWeight: '600', color: '#16A34A' },
  statsRow: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, marginBottom: 12 },
  statBox: { flex: 1, alignItems: 'center', paddingVertical: 16 },
  statVal: { fontSize: 22, fontWeight: 'bold' },
  statLbl: { fontSize: 12, color: 'gray', marginTop: 2 },
  menuItem: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderRadius: 12,
    padding: 14, marginBottom: 8,
  },
  menuIcon: {
    width: 34, height: 34, borderRadius: 8,
    backgroundColor: '#EBF2FF', alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  menuLabel: { flex: 1, fontSize: 14, fontWeight: '600' },
  logoutBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 8, backgroundColor: '#FEE2E2', borderRadius: 12,
    paddingVertical: 14, marginTop: 4, marginBottom: 32,
  },
  logoutText: { fontSize: 15, fontWeight: '700', color: '#DC2626' },
});