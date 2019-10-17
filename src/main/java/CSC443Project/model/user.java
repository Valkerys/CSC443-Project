package CSC443Project;

import java.lang.annotation.Inherited;

import javax.xml.bind.annotation.XmlID;

@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)

public class User {

	@Id
	@GeneratedValue(stragedy = GenerationType.AUTO)
	private long id;

	@Column(name = "full_name", nullable = false)
	private String fullName;
	
    @Column(name = "status", nullable = false)
	private String status;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
        this.id = id;
    }

}
