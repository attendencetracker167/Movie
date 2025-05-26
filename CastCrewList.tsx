import React, { useEffect, useState } from 'react';
import { getCastCrew } from '../../services/api';
import { CastCrew } from '../../types/models';

const CastCrewList = () => {
  const [castCrew, setCastCrew] = useState<CastCrew[]>([]);

  useEffect(() => {
    getCastCrew().then(data => setCastCrew(data));
  }, []);

  return (
    <div>
      <h2>Cast & Crew</h2>
      <ul>
        {castCrew.map(person => (
          <li key={person.id}>{person.name} - {person.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default CastCrewList;
