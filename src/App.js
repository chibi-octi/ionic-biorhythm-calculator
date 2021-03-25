import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [birthDate, setBrithDate] = useState('')
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating" >Name:</IonLabel>
          <IonInput value={name} 
            onIonChange={(event) => setName(event.detail.value)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Date of birth:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBrithDate(event.detail.value)}
          />
        </IonItem>
        <p>Name: {name}</p>
        <p>Date of Birth: {birthDate}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
