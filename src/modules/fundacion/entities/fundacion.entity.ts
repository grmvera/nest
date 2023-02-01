import { PersonaEntity } from "src/modules/persona/entities/persona.entity";
import { FundacionEntity } from "src/modules/sales/entities";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OneToMany } from "typeorm/decorator/relations/OneToMany";

export class FundacionEntity{

    @PrimaryGeneratedColumn('uuid')
    id:number;
    
    @CreateDateColumn({
        name:'created_date',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;
    @UpdateDateColumn({
        name:'updated_date',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP', 
    })
    updatedAt: Date;
    @DeleteDateColumn({
        name:'deleted_date',
        type:'timestamptz',
        nullable : true,
    })
    deletedAt:Date;
    
    //Relationship    
    // @ManyToOne(() => CategoryEntity, (cateogry) => category.fundacionts)
    // category: CategoryEntity;
    
    @Column('varchar', {
    name:'nombre',
    length:'50',
    unique:true,
    comment: 'nombre de la fundacionto',
    })
    nombre:string;
    
    @Column('varchar', {
    name:'direccion',
    length:'50',
    unique:true,
    comment: 'direccion de la fundacion',
    })
    direccion:string;

    @Column('varchar', {
    name:'encargado',
    length:'50',
    unique:true,
    comment: 'nombre del encargado',
    })
    encargado:string;
    
    @Column('varchar', {
    name:'telefono',
    length:'10',
    unique:true,
    comment: 'numero de telefono de la fundacion',
    })
    telefono:string;
   


    //Relationship   
     // Relaciones de uno a muchos
    @OneToMany(() => PersonaEntity , (persona) => persona.fundacion)
    personas: PersonaEntity[]

    // Relaciones de muchos a uno
    // @ManyToOne(() => CategoryEntity, (cateogry) => category.fundacion)
    // category: CategoryEntity;
    
    /*@Column('boolean',{
    name:'state',
    })
    state:boolean;
    @Column('enum', {
    name:'language',
    enum:languageTypeEnum,
    })
    language:LanguageTypeEnum;*/
    
    //completar
    
    @BeforeInsert()
    @BeforeUpdate()
    async setName(){
    if(!this.name){
        return;
    }
    this.name = this.name.toUpperCase();
    }
    /*setEmail(){
    if(!this.email){
    return;
    }
    this.email = this.email.toLowerCase().trim();
    
    async hashPassword(){
    if(!this.password){
        return;
    }
    this.password = await Bcrypt.hash(this.password, 12);
    }*/
    
    }