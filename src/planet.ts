interface ITranslation {}

export class Planet {
  public constructor(private readonly translation: ITranslation) {}
}
