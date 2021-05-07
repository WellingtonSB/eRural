package com.community.eRural.Repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.community.eRural.model.Usuario;

import antlr.collections.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	public Optional<Usuario> findByUsuario(String userName);
	public Optional<Usuario> findBytipoUsuario(String tipoUsuario);

}