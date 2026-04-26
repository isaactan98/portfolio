// Module-level cache — survives SPA navigation, cleared on full page refresh
const _repoCache = new Map<string, { stars: number; forks: number } | null>()
const _userReposCache = new Map<string, unknown[]>()

export interface RepoStats {
  stars: number
  forks: number
}

export function useGitHub() {
  /**
   * Fetch star + fork counts for a single repo.
   * fullName: e.g. "isaactan98/shadow-anime"
   * Returns null on error or when called server-side.
   */
  const fetchRepoStats = async (fullName: string): Promise<RepoStats | null> => {
    if (!import.meta.client) return null
    if (_repoCache.has(fullName)) return _repoCache.get(fullName)!

    try {
      const data = await $fetch<{ stargazers_count: number; forks_count: number }>(
        `https://api.github.com/repos/${fullName}`
      )
      const result: RepoStats = { stars: data.stargazers_count, forks: data.forks_count }
      _repoCache.set(fullName, result)
      return result
    }
    catch {
      _repoCache.set(fullName, null)
      return null
    }
  }

  /**
   * Fetch all public repos for a GitHub user (sorted by last updated).
   * Returns null on error or when called server-side.
   */
  const fetchUserRepos = async (username: string): Promise<unknown[] | null> => {
    if (!import.meta.client) return null
    if (_userReposCache.has(username)) return _userReposCache.get(username)!

    try {
      const data = await $fetch<unknown[]>(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`
      )
      _userReposCache.set(username, data)
      return data
    }
    catch {
      return null
    }
  }

  return { fetchRepoStats, fetchUserRepos }
}
