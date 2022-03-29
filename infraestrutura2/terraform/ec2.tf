resource "aws_instance" "terraform-mesa-4" {
    count = 2
    ami = "ami-04a50faf2a2ec1901"
    instance_type = "t2.micro"
    tags = {
        Name = "terraform-mesa-4_${count.index}"
        Terraform = "true"
    }
}

resource "aws_security_group" "permitir-ssh-mesa-4" {
    name = "permitir-ssh-mesa-4"
    description = "Permite SSH"
    ingress {
        description = "SSH to EC2"
        from_port = 22
        to_port = 22
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
    tags = {
        Name = "permitir-ssh-mesa-4" 
    }
}