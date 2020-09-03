import api from './api';

export function getCharacterInfo(id: string) {
	return api(id);
}
