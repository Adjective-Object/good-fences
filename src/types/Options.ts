import NormalizedPath from './NormalizedPath';

export default interface Options {
    project: NormalizedPath;
    rootDir: NormalizedPath[];
    ignoreExternalFences: boolean;
    looseRootFileDiscovery: boolean;
    /**
     * Specific source files to validate.
     */
    partialCheck?: {
        fences: NormalizedPath[];
        sourceFiles: NormalizedPath[];
    };
    partialCheckLimit: number;
    sinceGitHash?: string;
}
