export const store = {
  global: {
    events: {
      events: [],
      loading: 'boolean',
      error: 'string | undefined',
    },
  },
  profile: {
    info: {
      data: {},
      loading: 'boolean',
      error: 'string | undefined',
    },
    tournaments: {
      data: [],
      loading: 'boolean',
      error: 'string | undefined',
    },
  },
  home: {
    chat: {
      messages: [],
      loading: 'boolean',
      error: 'string | undefined',
    },
    filters: {
      searchLine: 'string',
      filteredTournaments: [],
    },
    tournaments: {
      data: [],
      loading: 'boolean',
      error: 'string | undefined',
    },
  },
  auth: {
    data: {},
    error: 'string | undefined',
    loading: 'boolean',
  },
  game: {
    waiting: {
      messages: [],
      error: 'string | undefined',
      loading: 'boolean',
    },
    state: {
      tournament: {},
      isStarted: 'boolean',
      isFinished: 'boolean',
      notJoined: 'boolean',
    },
    playing: {
      state: {
        score: 'number',
        missed: 'number',
        downed: 'number',
      },
      error: 'string | undefined',
      loading: 'boolean',
    },
  },
  rating: {
    filters: {
      searchLine: 'string',
      filteredUsers: [],
      error: 'string | undefined',
      loading: 'boolean',
    },
    users: {
      data: [],
      error: 'string | undefined',
      loading: 'boolean',
    },
  },
}
