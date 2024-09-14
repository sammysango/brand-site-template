import React from 'react';
import styles from './MeetTheTeam.module.css';

import theodoreImg from '../images/theodore.jpg';
import joelImg from '../images/joel.jpg';
import charlotteImg from '../images/charlotte.jpg';
import craigImg from '../images/craig.jpg';

const teamMembers = [
  { name: 'Theodore', imageUrl: theodoreImg },
  { name: 'Joel', imageUrl: joelImg },
  { name: 'Charlotte', imageUrl: charlotteImg },
  { name: 'Craig', imageUrl: craigImg }
];

const MeetTheTeam = () => {
  return (
    <div className={styles.teamContainer}>
      <h2 className={styles.heading}>Meet the Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <img src={member.imageUrl} alt={member.name} className={styles.teamImage} />
            </div>
            <p className={styles.memberName}>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
