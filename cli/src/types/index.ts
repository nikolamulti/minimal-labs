export type LicenseKey = string;
export type InstanceId = string;
export type Component = string;
export type Command = "init" | "activate" | "deactivate" | "add" | "help";

export interface Config {
  license_key: LicenseKey;
  instance_id: InstanceId;
}

export interface APIResponse {
  instance_id: InstanceId;
}

export interface ComponentData {
  fileName: string;
  code: string;
}

export interface ComponentsResponse {
  components: Component[];
}

export interface ComponentFilesResponse {
  components?: ComponentData[];
}
