import React, {useState, useEffect} from 'react'; 
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'; 

import ContactThumbnail from '../components/ContactThumbnail';
import colors from '../utility/colors';
import { fetchUserContact } from '../utility/api';
const User = ()=> { 
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    //Load du lieu 
    useEffect(()=>{
        fetchUserContact()
        .then(
            users=> {
                setUser(users);
                setLoading(false);
                setError(false);
            }
        )
        .catch(
            e=>{
                console.log(e);
                setLoading(false);
                setError(true); 
            }
        )
    },[])
        const { avatar, name, phone } = user; 

        return ( 
        <View style={styles.container}> 
            {loading && <ActivityIndicator color="blue" size="large" />}
            {error && <Text>Error...</Text>}
            {!loading&& !error && (
                <ContactThumbnail avatar={avatar} name={name} phone={phone} /> 
            )
            
            }

        </View> 
        
        ); 
    }

const styles = StyleSheet.create({ 
        container: { 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: colors.blue, 
    },
}); 

export default User;