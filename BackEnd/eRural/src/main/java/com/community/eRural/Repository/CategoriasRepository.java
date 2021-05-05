package com.community.eRural.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.community.eRural.model.Categorias;

@Repository


public interface CategoriasRepository extends JpaRepository<Categorias, Long>
{

	public List<Categorias> findAllByNomeContainingIgnoreCase(String nome);

	public List<Categorias> findAllByDescricaoContainingIgnoreCase(String decricao);

}