import { PeopleData } from '../../interfaces'

export interface PreviewStorage {
  parent: PeopleData;
  child: PeopleData[];
}

export interface PreviewProps {
  parent: PeopleData;
  child: PeopleData[];
}
