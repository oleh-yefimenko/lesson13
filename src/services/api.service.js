import { ChallengerService, ChallengesService } from './index.service';

export class Api {
	constructor(request) {
		this.request = request;
		this.challenger = new ChallengerService(request);
		this.challenges = new ChallengesService(request);
	}
}
