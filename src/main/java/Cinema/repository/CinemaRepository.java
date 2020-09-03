package Cinema.repository;

import Cinema.model.Cinema;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface CinemaRepository extends PagingAndSortingRepository<Cinema, Long>, JpaSpecificationExecutor<Cinema> {
    List<Cinema> findByName(String name);
}
