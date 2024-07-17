import { RoommateProfile } from '@roster/common';
import updateGeneralProfile from '../../actions/updateGeneralProfile';
import { Alert, Form, FormControl, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import SubmitButton from '../SubmitButton';
import updateRoommateProfile from '../../actions/updateRoommateProfile';

export default function RoommateProfileView({ roommateProfile }: { roommateProfile?: RoommateProfile }) {
  if (process.env.NODE_ENV !== 'development') {
    if (!roommateProfile) {
      // Redirect to '/matching/roommates' and display questionnaire
      return (
        <Alert variant="danger" className={"mt-4"}>Failed to get general profile data</Alert>);
    }
  }

  const {sleepTime, guests} = roommateProfile ?? { sleepTime: 1, guests: 0 }

  return (
    <div>
      <h1>Roommate Profile</h1>
      <Form action={updateRoommateProfile}>
        <FormGroup className="mb-3" controlId="formSleepTime">
          <FormLabel>How late do you usually go to sleep?</FormLabel>
          <FormSelect aria-label="Default select example" defaultValue={sleepTime} name={'formSleepTime'}>
            <option value={0}>9 pm or Earlier</option>
            <option value={1}>10 pm</option>
            <option value={2}>11 pm</option>
            <option value={3}>12 am</option>
            <option value={4}>1 am</option>
            <option value={5}>2 am or later</option>
          </FormSelect>
        </FormGroup>
        <FormGroup className="mb-3" controlId="formGuests">
          <FormLabel>How often do you like having guests?</FormLabel>
          <FormSelect aria-label="Default select example" defaultValue={guests} name={"formGuests"}>
            <option value={0}>Never</option>
            <option value={1}>Rarely</option>
            <option value={2}>Sometimes</option>
            <option value={3}>Often</option>
            <option value={4}>Almost Always</option>
          </FormSelect>
        </FormGroup>
        <SubmitButton variant="primary" type="submit">
          Save
        </SubmitButton>
      </Form>
    </div>
  )
}

