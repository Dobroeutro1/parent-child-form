import { PeopleData } from '../../interfaces'

export interface FormStorage {
  parent: PeopleData;
  child: PeopleData[];
}

export interface FormProps {
  parent: PeopleData;
  child: PeopleData[];
}

export interface FormState {
  parent: PeopleData;
  child: PeopleData[];
}
