import { firebaseDB } from './fbase';

class Repository {

    readInfo(onUpdate) {
        const dbRef = firebaseDB.ref(`press`);
        dbRef.on('value', snapshot => {
            const data = snapshot.val();
            data && onUpdate(data);
        })
        return dbRef.off;
    }
}
export default Repository;