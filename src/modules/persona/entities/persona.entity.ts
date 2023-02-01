import { FundacionEntity } from "src/modules/fundacion/entities/fundacion.entity";
import { PersonaEntity } from "src/modules/sales/entities";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OneToMany } from "typeorm/decorator/relations/OneToMany";

export class PersonaEntity{

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
    // @ManyToOne(() => CategoryEntity, (cateogry) => category.personats)
    // category: CategoryEntity;
    
    @Column('varchar', {
    name:'nombre',
    length:'50',
    unique:true,
    comment: 'nombre de la persona',
    })
    name:string;
        
    @Column('varchar', {
    name:'cedula',
    length:'10',
    unique:true,
    comment: 'cedula de la persona',
    })
    direccion:string;
    
    @Column('date', {
    name:'fechaNacimiento',
    length:'10',
    unique:true,
    comment: 'nombre del encargado',
    })
    fechaNacimiento:date;
        
    @Column('varchar', {
    name:'nacionalidad',
    length:'25',
    unique:true,
    comment: 'naciondalidad de la persona',
    })
    nacionalidad:string;
       
    //Relationship   
     // Relaciones de uno a muchos
     @ManyToOne(() => FundacionEntity, (fundacion) => fundacion.personas)
     fundacion: FundacionEntity;

    // Relaciones de muchos a uno
    // @ManyToOne(() => CategoryEntity, (cateogry) => category.persona)
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