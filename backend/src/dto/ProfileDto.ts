class CreateProfileDto {
  name!: string;
  permissions!: number[];
}

class UpdateProfileDto {
  name!: string;
  permissionsToAdd!: number[];
  permissionsToRemove!: number[];
}

export {
  CreateProfileDto,
  UpdateProfileDto
}