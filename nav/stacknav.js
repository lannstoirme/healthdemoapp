import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MeasureScreen from './../screens/MeasureScreen';
import HomeScreen from './../screens/HomeScreen';
import DoctorScreen from './../screens/DoctorScreen';
import VitalScreen from './../screens/VitalScreen';

const StackNav = createStackNavigator();

function Stack() {
    return (
    <NavigationContainer>
        <StackNav.Navigator>
            <StackNav.Screen name="Measure" component={MeasureScreen} />
            <StackNav.Screen name="Home" component={HomeScreen} />
            <StackNav.Screen name="Vitals" component={VitalScreen} />
            <StackNav.Screen name="Doctor" component={DoctorScreen} />
        </StackNav.Navigator>
    </NavigationContainer>
    );
}

export default Stack;