import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { EmptyList } from '@components/EmptyList';

import { Container } from './styles';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>()

  return (
    <Container>
      <Header />

      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma."
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups?.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList
            message="Você ainda não possui turmas."
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button
        title='Criar nova turma'
      />
    </Container>
  );
}
